Public class CopyTheListToOtherList {
    Public static void ListConcatenation(){
        
        //we make lists first 
        List<Integer>empNo = new List<Integer>{122,134,156,166,168};
        List<Integer>newEmp = new List<Integer>{124,139,176,196,181};
         // now suppose we have to copy the NewEmp list into the EmpNo list 
         
        empNo.addAll(newEmp);  //.addAll(); function
        
        System.debug(empNo);   //11:00:09:014 USER_DEBUG [10]|DEBUG|(122, 134, 156, 166, 168, 124, 139, 176, 196, 181)


        //another method dynamic
        List<Integer>empNo1 = new List<Integer>();
        empNo1.add(12);
        empNo1.add(42);
        empNo1.add(62);

        List<Integer>empNo2 = new List<Integer>(empNo1);
        System.debug(empNo2);


    }

}
        


          
        
