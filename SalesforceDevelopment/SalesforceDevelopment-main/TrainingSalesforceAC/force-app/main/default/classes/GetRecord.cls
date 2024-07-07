public with sharing class GetRecord {
    @AuraEnabled(cacheable = true)
    public static List<Account> GetAccount(){
        return [SELECT Id, Name, Phone FROM Account WHERE Phone!=NULL]
       
    ;}
    public GetRecord() {

    }
}