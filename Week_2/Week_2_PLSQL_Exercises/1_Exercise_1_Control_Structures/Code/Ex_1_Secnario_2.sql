BEGIN
  FOR record IN (SELECT customerid, balance FROM customers) LOOP
    IF record.balance > 10000 THEN
      UPDATE customers
      SET IsVIP = 'TRUE'
      WHERE customerid = record.customerid;
    END IF;
  END LOOP;
  COMMIT;
END;
/