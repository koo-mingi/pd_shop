package nexacro.sample.service.prgr;

import java.util.List;
import java.util.Map;

import nexacro.sample.vo.prgr.Edoc_admVO;

public interface Edoc_admService {
	
	public List<Edoc_admVO> edoc_lawsuitSelect(Map<String, Object> selectMap);
	public List<Edoc_admVO> edoc_pladefSelect(Map<String, Object> selectMap);
	public List<Edoc_admVO> edoc_admSelect1(Map<String, Object> selectMap);
	public List<Edoc_admVO> edoc_admSelect2(Map<String, Object> selectMap);
	public String edoc_admSave(List<Edoc_admVO> Edoc_admVO);
	public List<Edoc_admVO> getEdocAdmList(String lawsuitAdmNo);
	public String edoc_admDelete(Map<String, Object> deleteMap);

}
