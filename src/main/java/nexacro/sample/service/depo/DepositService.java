package nexacro.sample.service.depo;

import java.util.List;

import nexacro.sample.vo.depo.DepositVO;


public interface DepositService {

	public List<DepositVO> getDepositList(DepositVO vo);

	public List<DepositVO> getDepositMgrList(DepositVO vo);
			
	public void updateDeposit(DepositVO vo);
	
	public void updateDepositMgr(DepositVO vo);
}
