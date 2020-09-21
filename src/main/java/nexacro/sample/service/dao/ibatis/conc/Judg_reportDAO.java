package nexacro.sample.service.dao.ibatis.conc;

import java.util.List;

import nexacro.sample.vo.conc.Judg_reportVO;

import org.springframework.stereotype.Repository;

import com.nexacro.spring.dao.ibatis.NexacroIbatisAbstractDAO;

@Repository("judgReportDAO")
public class Judg_reportDAO extends NexacroIbatisAbstractDAO{

	public List<Judg_reportVO> getlawsuitInfo(Judg_reportVO vo){
		return (List<Judg_reportVO>) list("conc.Judg_reportDAO.getlawsuitInfo", vo);
	}
	
	public List<Judg_reportVO> getInstAdmInfo(Judg_reportVO vo){
		return (List<Judg_reportVO>) list("conc.Judg_reportDAO.getInstAdmInfo", vo);
	}
	
	public List<Judg_reportVO> getPladefInfo(Judg_reportVO vo){
		return (List<Judg_reportVO>) list("conc.Judg_reportDAO.getPladefInfo", vo);
	}
	
	public int lawsuitUpdate1(Judg_reportVO vo){
		return update("conc.Judg_reportDAO.lawsuitUpdate1", vo);
	}
	public int lawsuitUpdate2(Judg_reportVO vo){
		return update("conc.Judg_reportDAO.lawsuitUpdate2", vo);
	}
	
	public int instAdmUpdate1(Judg_reportVO vo){
		return update("conc.Judg_reportDAO.instAdmUpdate1", vo);
	}
	public int instAdmUpdate2(Judg_reportVO vo){
		return update("conc.Judg_reportDAO.instAdmUpdate2", vo);
	}
	
	public int pladefUpdate(Judg_reportVO vo){
		return update("conc.Judg_reportDAO.pladefUpdate", vo);
	}

}
