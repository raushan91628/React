public class ClearAndClone {
    
    public static void ClearAList(){
        List<Integer> ToBe = new List<Integer>{12,53,63,37,88};
        System.debug('Initial List' + ToBe);
        ToBe.clear();
        System.debug('Cleared List' + ToBe);
    }
    
    //This is how we clear a list now how to clone or duplicate a list
   
    public static void DuplicateList(){
        List<Integer> Og = new List<Integer>{22,33,44,66,88};
        List<Integer> Dupli = Og.clone();
        System.debug(Dupli);
        
    }

}