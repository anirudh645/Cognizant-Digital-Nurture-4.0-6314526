DECLARE
  v_count NUMBER := 0;
BEGIN
  FOR rec IN (
    SELECT l.LoanID, l.InterestRate
    FROM Loans l
    JOIN Customers c ON l.CustomerID = c.CustomerID
    WHERE (MONTHS_BETWEEN(SYSDATE, c.DOB) / 12) > 60
      AND l.InterestRate >= 1
  ) LOOP
    UPDATE Loans
    SET InterestRate = rec.InterestRate * 0.99
    WHERE LoanID = rec.LoanID;
    v_count := v_count + SQL%ROWCOUNT;
  END LOOP;
  IF v_count = 0 THEN
      DBMS_OUTPUT.PUT_LINE('No records updated.');
  ELSE
      DBMS_OUTPUT.PUT_LINE(v_count || ' records updated.');
  END IF;
  COMMIT;
END;
/