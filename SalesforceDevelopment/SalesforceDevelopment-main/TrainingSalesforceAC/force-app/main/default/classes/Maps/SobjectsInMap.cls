// using sobjects standard objects in MAP

List<Account> AccList = [Select Id,Name from Account];


//Map<Id,Account> CloneList = new Map<Id,Account>(AccList);
//System.debug(CloneList);     //Working

Map<Id,Name> CloneList = new Map<Id,Name>(AccList);
System.debug(CloneList);  //Not Working



//USER_DEBUG|[7]|DEBUG|{001IR00001m9oStYAI=Account:{Id=001IR00001m9oStYAI, Name=Sample Account for Entitlements}, 001IR00001m9yFrYAI=Account:{Id=001IR00001m9yFrYAI, Name=hello compnay}, 001IR00001m9yKqYAI=Account:{Id=001IR00001m9yKqYAI, Name=Bye company}, 
//001IR00001mBRBQYA4=Account:{Id=001IR00001mBRBQYA4, Name=Appy Crown}, 001IR00001mBUJ6YAO=Account:{Id=001IR00001mBUJ6YAO, Name=DateTaskUser}, 001IR00001mBUc6YAG=Account:{Id=001IR00001mBUc6YAG, Name=Acme Corporation}, 001IR00001mBUgyYAG=Account:{Id=001IR00001mBUgyYAG, Name=Acme Corporation}, 001IR00001qbH4OYAU=Account:{Id=001IR00001qbH4OYAU, Name=Edge Communications},
// 001IR00001qbH4PYAU=Account:{Id=001IR00001qbH4PYAU, Name=Burlington Textiles Corp of America}, 001IR00001qbH4QYAU=Account:{Id=001IR00001qbH4QYAU, Name=Pyramid Construction Inc.}, ...}
// 22:57:04.33 (33186249)|CUMULATIVE_LIMIT_USAGE
// 22:57:04.33 (33186249)|LIMIT_USAGE_FOR_NS|(default)|