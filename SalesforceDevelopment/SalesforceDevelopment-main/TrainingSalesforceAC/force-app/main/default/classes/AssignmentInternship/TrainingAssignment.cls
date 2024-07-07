public class TrainingAssignment {
    
    public static void QuestionOne(){
        //Create a variable isApproved of type Boolean and set it to true.
        Boolean isApproved =True;
        //Write an if-else statement that prints "Access granted" if the Boolean variable isApproved is true, and "Access denied" otherwise.
        if(isApproved == True){
            System.debug('Access Granted');
        }else{
            System.debug('Access Denied');
        }
    }
    
    public static void QuestionTwo(){
        //Using a for loop, iterate through numbers 1 to 5 and print each number
        for(Integer i=0;i<5;i++){
            System.debug(i + 1);
        }  
    }
    public static void QuestionThree(){
    //Create a List of Strings containing the names "John", "Jane", and "Bob"
        List<String> NameList = New List<String>{'John','Jane'};  //statically
            NameList.add('Bob'); //dynamically
        
        //Write a loop to iterate over the List and print each name.

        for(integer i=0;i<3;i++){
            System.debug(Namelist[i]);
        }
        
    }
    
    //Define a simple class named Calculator with a method add that takes two Integer parameters and returns their sum.
    
    public static Integer QuestionFour(Integer num1, Integer num2){
       Integer sum = num1 + num2;
       return sum;
    }
    
    public static void QuestionFive(){
        // Write a SOQL query to select the Name, Email, and Phone fields from all Contact records
        List<Contact> ConQuery = [SELECT Name, Email, Phone from Contact];
        System.debug(ConQuery);
    }
    
    public static void QuestionSix(){
        //Write a code snippet to insert a new Account record with the name "Acme Corporation" and the industry "Technology
        List<Account> acclist = new List<Account>();
        
        Account AcmeCorps = new Account();
        AcmeCorps.Name = 'Acme Corporation';
        AcmeCorps.Industry = 'Technology';
        
        acclist.add(AcmeCorps);
        insert(acclist);
        
    }
    public static void QuestionSeven(){
        //Update the Account record inserted before named 'Acme Corporation' to change its industry to "Finance"
        List<Account> accList = [SELECT Id, Name FROM Account WHERE Name = 'Acme Corporation'];
        
        for(Account Ac : accList){
            Ac.Industry = 'Finance';
        }
        update(accList);
        System.debug(accList);
    }
    
}