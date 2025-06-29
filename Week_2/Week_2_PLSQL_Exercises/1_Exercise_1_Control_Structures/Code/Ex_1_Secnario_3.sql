--Updates Loans table so that there are atleast 2 loans the end in the next 30 days to verify the method is working
SET SERVEROUTPUT ON
BEGIN
  FOR record IN (
    SELECT l.LOANID, l.CUSTOMERID, l.LOANAMOUNT, l.ENDDATE, c.NAME
    FROM Loans l
    JOIN Customers c ON l.CUSTOMERID = c.CUSTOMERID
    WHERE l.ENDDATE BETWEEN SYSDATE AND SYSDATE + 30
  ) LOOP
    DBMS_OUTPUT.PUT_LINE(CHR(10));
    DBMS_OUTPUT.PUT_LINE('Dear ' || record.NAME ||
                         ', this is a gentle reminder that your loan with Loan ID ' || record.LOANID ||
                         ' (Amount: $' || TO_CHAR(record.LOANAMOUNT, '999,999.99') ||
                         ') is due on ' || TO_CHAR(record.ENDDATE, 'DD-Mon-YYYY') ||
                         '. Please ensure timely payment. Thank you!');
  END LOOP;
  COMMIT;
END;
/