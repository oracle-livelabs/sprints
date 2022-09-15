# How do I setup a Chatbot?
Duration: 2 minutes

##  Heading 1

This is my workshop content.

### Heading 2 - v5

1. Create a procedure that checks for unsent mails in the mailing\_list table with a mail sent status as null. Once a mail is sent, the status will be updated as mail\_sent

      ```
      <copy> 
      create or replace procedure "TEST_EMAIL_ALERT"
      is
            --declare
            l_body      CLOB;
            l_body_warning    varchar2(100);
            l_body_html CLOB;
            l_body_html2 CLOB;
            l_to_email    varchar2(100);
            l_to_email1    varchar2(100);
            l_to_email2   varchar2(100);
            l_subject VARCHAR2(100) := 'Demo Event Mail:  ';
            l_sender_email VARCHAR2(100) := 'noreply@domain.com';
            l_replyto_email VARCHAR2(100) := 'noreply@domain.com';
            var_id number;

            Cursor C_LL_MAILJOBS Is
            Select ID, MAILTO, MAILBODY, MAILTYPE, MAILFROM, REPLYTO
            From   MAILING_LIST  WHERE  MAILSTATUS IS NULL;

      begin

            wwv_flow_api.set_security_group_id;
            l_body := 'To view the content of this message use an HTML enabled mail client.'||utl_tcp.crlf;
            For row_1 In C_LL_MAILJOBS Loop
                  var_id := row_1.ID;
                  l_to_email := row_1.MAILTO;
                  l_subject  := row_1.MAILTYPE;
                  l_body_html :=  row_1.MAILBODY;
                  l_sender_email := row_1.MAILFROM;
                  l_replyto_email := row_1.REPLYTO;
                  apex_mail.send( p_to   => l_to_email , p_from => l_sender_email, 
                  p_body  => l_body, p_body_html => l_body_html, p_subj => l_subject  );
                  UPDATE MAILING_LIST SET MAILSTATUS = 'MAIL_SENT' WHERE ID = var_id;
            end loop;


      end;   
      </copy>
      ``` 

## Learn More

* [Scheduling Jobs with Oracle Scheduler](https://docs.oracle.com/cd/E11882_01/server.112/e25494/scheduse.htm)
