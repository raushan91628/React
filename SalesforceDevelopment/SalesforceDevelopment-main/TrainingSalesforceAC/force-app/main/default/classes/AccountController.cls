public with sharing class AccountController {
    public AccountController() {


        @AuraEnabled
        public static string createAccount(String userName , String phone){
            Account newAccount = new Account(Name = userName , Phone = phone);
            insert newAccount;
            return newAccount;
        }

    }
}