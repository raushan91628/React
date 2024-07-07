public class ListsWithDesiredIndex {
    public static void IndexInsertion(){
       List <Account> accList = new List<Account>();
        
        Account a1 = new Account(); //instance of account
        a1.Name = 'Abhishek';
        a1.Phone = '938833';
        a1.Rating = 'Hot';
        accList.add(a1);
        Account a2 = new Account();
        a2.Name = 'Jeet';
        a2.Phone = '94433';
        a2.Rating = 'Warm';
        
        accList.add(a2);
       // System.debug(accList);(Account:{Name=Abhishek, Phone=938833, Rating=Hot}, Account:{Name=Jeet, Phone=94433, Rating=Warm})
       
        //now to add a new account a3 at the starting of the list i.e index 0 
        
        Account a3 = new Account();
        a3.Name = 'Aanchal';
        a3.Phone = '3443334';
        a3.Rating = 'cold';
        
        accList.add(0,a3);
            //listname.add(index_number,instance)
        System.debug(accList);
        /*DEBUG|(Account:{Name=Aanchal, Phone=3443334, Rating=cold}, Account:{Name=Abhishek, Phone=938833, Rating=Hot},
         Account:{Name=Jeet, Phone=94433, Rating=Warm})*/
    }

}