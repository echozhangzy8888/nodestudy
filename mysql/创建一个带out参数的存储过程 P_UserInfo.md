-- ----------------------------
-- Procedure structure for `P_UserInfo`
-- ----------------------------

DROP PROCEDURE IF EXISTS `P_UserInfo`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `P_UserInfo`(IN ExtId INT,IN ExtUserName VARCHAR(64),IN ExtUserPass VARCHAR(64),OUT ExtReturnVal INT)
TOP: BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK;
        SET ExtReturnVal = 0;  -- Failed
    END;

START TRANSACTION;

        INSERT INTO userinfo(Id,UserName,UserPass) VALUES(ExtId,ExtUserName,ExtUserPass);
        
        SET ExtReturnVal = 1;
        SELECT ExtReturnVal;
        COMMIT;
END
;;
DELIMITER ;