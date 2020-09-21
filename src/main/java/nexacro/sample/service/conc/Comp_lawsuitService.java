package nexacro.sample.service.conc;

import java.util.List;
import java.util.Map;

import nexacro.sample.vo.conc.Comp_lawsuitVO;
import nexacro.sample.vo.conc.Judg_reportVO;

public interface Comp_lawsuitService {
	
	public List<Comp_lawsuitVO> getlawsuitInfo(Comp_lawsuitVO vo);
	
	public List<Comp_lawsuitVO> getPladefInfo(Comp_lawsuitVO vo);
	
	public boolean lawsuitUpdate(List<Comp_lawsuitVO> list);
	
	public boolean pladefUpdate(List<Comp_lawsuitVO> list);
	
//  원피고 Count 조회
	List getPladeCountList(Comp_lawsuitVO vo) throws Exception;
	
	//원피고 종결사항 입력, 수정, 삭제(insert, update, delete) -- 원피고 사항 
	String createPladef(List<Comp_lawsuitVO> pladef) throws Exception;
	
	//소송 종결사항 입력, 수정, 삭제(insert, update, delete) -- 소송 사항 
	String createConc(List<Comp_lawsuitVO> lawsuit) throws Exception;

	public List getPseqJudglist(Comp_lawsuitVO pladef);
	
	public List getinstanceListAll(Map<String, Object> selectMap ) throws Exception;
}
