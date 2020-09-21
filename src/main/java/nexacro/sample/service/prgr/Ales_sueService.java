package nexacro.sample.service.prgr;

import java.util.List;
import java.util.Map;

import nexacro.sample.vo.prgr.Ales_sueVO;

public interface Ales_sueService {
	
	public List<Ales_sueVO> law_suitSelect(Map<String, Object> selectMap);
	public List<Ales_sueVO> pla_defSelect(Map<String, Object> selectMap);
	public List<Ales_sueVO> ales_sueSelect(Map<String, Object> selectMap);
	public String ales_sueSave(List<Ales_sueVO> Ales_sueVO);
	void updateAlesSue(Object alesSueVO);

}
