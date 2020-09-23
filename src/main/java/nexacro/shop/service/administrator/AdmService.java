package nexacro.shop.service.administrator;



import java.util.Map;


import nexacro.shop.vo.administrator.AdmVO;


public interface AdmService {
	public AdmVO admlogin(Map<String, String> loginMap);
	public AdmVO selectId(String id);
	public int admInsert(AdmVO admVO);
}
