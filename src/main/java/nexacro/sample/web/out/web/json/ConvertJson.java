package nexacro.sample.web.out.web.json;


import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.json.Json;
import javax.json.JsonArrayBuilder;
import javax.json.JsonBuilderFactory;
import javax.json.JsonObjectBuilder;

public class ConvertJson{

	private String jsonStr;
	private List list;
	private JsonBuilderFactory factory;
	private JsonArrayBuilder ab;
	private JsonObjectBuilder ob;
	private HashMap<String, String> hmap;
	
	public ConvertJson(){
		hmap = new HashMap<String, String>();
		factory = Json.createBuilderFactory(hmap);
		ab = factory.createArrayBuilder();		
	}
	
	/* list 받아 json셋팅 */
	public void setList(List list, Object obj) {
		this.list = list;
		System.out.println("list : "+list);
		System.out.println("list_size : "+list.size());
	
		/* key, value 알아내기 */
		int ls = list.size(); // 리스트 크기;		
		
		Set key = null;
		Map map = null;
		String kn = ""; // key
		String vn = ""; // vlaue

		try{	
			for(int i =0;i<ls;i++){
				map = (Map) list.get(i);
				obj = list.get(i); // VO 오브젝트
			
				ob = factory.createObjectBuilder();
				
				key = map.keySet();
				for (Iterator iterator = key.iterator(); iterator.hasNext();) {
	                kn = (String) iterator.next();
	                
	                if(map.get(kn) == ""|| map.get(kn) == null || map.get(kn) =="null"){
                		vn = "-";
                	}else{
                		vn = (String) (map.get(kn)+""); // 숫자일경우 문자형으로 변환
                	}	
//	                System.out.println(kn +" = " +vn);
	                ob.add(kn, URLEncoder.encode(vn,"UTF-8"));
				}//for-2
				ab.add(ob);
			}//for-1
		} catch (UnsupportedEncodingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();	
		}
	}// setList()

	public String getJsonStr() {
		jsonStr = ab.build().toString();
		return jsonStr;
	}
	
}// class