package nexacro.sample.service.conc;

import java.util.List;

import nexacro.sample.vo.conc.Judg_reportVO;

public interface Judg_reportService {
	
	public List<Judg_reportVO> getlawsuitInfo(Judg_reportVO vo);
	
	public List<Judg_reportVO> getInstAdmInfo(Judg_reportVO vo);
	
	public List<Judg_reportVO> getPladefInfo(Judg_reportVO vo);
	
	public boolean lawsuitUpdate(List<Judg_reportVO> list);
	
	public boolean instAdmUpdate(List<Judg_reportVO> list);
	
	public boolean pladefUpdate(List<Judg_reportVO> list);
}
