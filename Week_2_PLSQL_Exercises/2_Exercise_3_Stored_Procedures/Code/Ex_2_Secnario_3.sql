CREATE OR REPLACE PROCEDURE transfer_amount (
    p_from_acct IN NUMBER,
    p_to_acct   IN NUMBER,
    p_amt       IN NUMBER
) AS
    v_from_balance NUMBER;
    v_to_balance   NUMBER;
BEGIN
    -- Lock rows and get balances
    SELECT balance INTO v_from_balance FROM accounts WHERE accountid = p_from_acct FOR UPDATE;
    SELECT balance INTO v_to_balance FROM accounts WHERE accountid = p_to_acct FOR UPDATE;

    IF v_from_balance < p_amt THEN
        RAISE_APPLICATION_ERROR(-20001, 'Insufficient funds.');
    END IF;

    -- Deduct from sender
    UPDATE accounts
    SET balance = balance - p_amt,
        lastmodified = SYSDATE
    WHERE accountid = p_from_acct;

    -- Add to receiver
    UPDATE accounts
    SET balance = balance + p_amt,
        lastmodified = SYSDATE
    WHERE accountid = p_to_acct;

    -- Log transaction for sender (Transfer Out)
    INSERT INTO transactions (transactionid, accountid, transactiondate, amount, transactiontype)
    VALUES (trans_seq.NEXTVAL, p_from_acct, SYSDATE, -p_amt, 'Transfer Out');

    -- Log transaction for receiver (Transfer In)
    INSERT INTO transactions (transactionid, accountid, transactiondate, amount, transactiontype)
    VALUES (trans_seq.NEXTVAL, p_to_acct, SYSDATE, p_amt, 'Transfer In');

    COMMIT;
EXCEPTION
    WHEN NO_DATA_FOUND THEN
        RAISE_APPLICATION_ERROR(-20002, 'One or both accounts do not exist.');
    WHEN OTHERS THEN
        ROLLBACK;
        RAISE;
END;
/