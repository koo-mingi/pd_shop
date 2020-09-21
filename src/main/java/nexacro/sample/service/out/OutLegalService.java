package nexacro.sample.service.out;

import java.util.List;

import nexacro.sample.vo.out.OutLegalVo;

public interface OutLegalService {

	//법률자문 조회
	public List<OutLegalVo> getOutLegalAdList(OutLegalVo outLegalVo);
	
	//법률자문비 조회
	public List<OutLegalVo> getOutLegalAdCostList(OutLegalVo outLegalVo);
	
	//법률자문비 insert,update,delete
	public void OutlegalAdvCostCud(List<OutLegalVo> costVo
													,List<OutLegalVo> legalAdVo);
	
	//법률자문비 insert,update,delete
	public void OutLegalCostDel(List<OutLegalVo> costVo);
}
