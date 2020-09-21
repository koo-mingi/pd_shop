package nexacro.sample.service.impl.depo;

import java.util.List;

import javax.annotation.Resource;

import nexacro.sample.service.dao.ibatis.depo.DepoDAO;
import nexacro.sample.service.dao.ibatis.depo.DepositDAO;
import nexacro.sample.service.depo.DepoService;
import nexacro.sample.service.depo.DepositService;
import nexacro.sample.vo.depo.DepoVO;
import nexacro.sample.vo.depo.DepositVO;
import nexacro.sample.vo.depo.SawonVO;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.spring.data.DataSetRowTypeAccessor;
import com.nexacro.xapi.data.DataSet;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


@Service("depositService")
public class DepositServiceImpl extends EgovAbstractServiceImpl implements DepositService{

	@Resource(name = "depositDao")
	private DepositDAO depositDao;

	@Override
	public List<DepositVO> getDepositList(DepositVO vo) {
		// TODO Auto-generated method stub
		return depositDao.getDepositList(vo);
	}

	@Override
	public List<DepositVO> getDepositMgrList(DepositVO vo) {
		// TODO Auto-generated method stub
		return depositDao.getDepositMgrList(vo);
	}

	@Override
	public void updateDeposit(DepositVO vo) {
		depositDao.updateDeposit(vo);
	}

	@Override
	public void updateDepositMgr(DepositVO vo) {
		depositDao.updateDepositMgr(vo);
	}
	
	
}
