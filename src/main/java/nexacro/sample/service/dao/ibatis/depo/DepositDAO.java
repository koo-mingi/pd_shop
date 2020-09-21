package nexacro.sample.service.dao.ibatis.depo;

import java.util.List;

import nexacro.sample.vo.depo.DepoVO;
import nexacro.sample.vo.depo.DepositVO;
import nexacro.sample.vo.depo.SawonVO;

import org.springframework.stereotype.Repository;

import com.nexacro.spring.dao.ibatis.NexacroIbatisAbstractDAO;

@Repository("depositDao")
public class DepositDAO extends NexacroIbatisAbstractDAO {

	public List<DepositVO> getDepositList(DepositVO vo){
		return (List<DepositVO>) list("depo.DepoDAO.getDepositList", vo);
	}

	public List<DepositVO> getDepositMgrList(DepositVO vo){
		return (List<DepositVO>) list("depo.DepoDAO.getDepositMgrList", vo);
	}
	
	public void updateDeposit(DepositVO vo){
		update("depo.DepoDAO.updateDeposit", vo);
	}
	
	public void updateDepositMgr(DepositVO vo){
		update("depo.DepoDAO.updateDepositMgr", vo);
	}
	
}
