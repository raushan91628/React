Map <Integer, String> Original = new Map <Integer, String>();
Original.put(1,'Rohit Sharma');
Original.put(2,'Yashashvi Jaiswal');
Original.put(3,'Virat Kohli');

System.debug(Original);

Map <Integer, String> CopyOriginal = new Map <Integer, String>(Original);
System.debug(CopyOriginal);


