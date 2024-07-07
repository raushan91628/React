public class StaticnDynamicDeclarationLists {
    Public static void ListMethod(){
        
        //static declaration
        List <Integer> IntSList = new List<Integer>{12,19,65,333};
            System.debug(IntSList);
        
        //dynamic declaration
        List <Integer> IntDList = new List<Integer>();
        IntDlist.add(13);
        IntDlist.add(45);
        IntDlist.add(87);
        IntDlist.add(574);
        System.debug(IntDList);
    }

}