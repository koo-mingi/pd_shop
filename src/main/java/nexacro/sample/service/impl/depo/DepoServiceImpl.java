package nexacro.sample.service.impl.depo;

import java.util.List;

import javax.annotation.Resource;

import nexacro.sample.service.dao.ibatis.depo.DepoDAO;
import nexacro.sample.service.depo.DepoService;
import nexacro.sample.vo.depo.DepoVO;
import nexacro.sample.vo.depo.SawonVO;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.spring.data.DataSetRowTypeAccessor;
import com.nexacro.xapi.data.DataSet;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


@Service("depoService")
public class DepoServiceImpl extends EgovAbstractServiceImpl implements DepoService{

	@Resource(name = "depoDao")
	private DepoDAO depoDao;
	
	// 공탁관리번호 조회
	@Override
	public List<DepoVO> selectDepoVoList(DepoVO searchVO) {
		return depoDao.selectDepotList(searchVO);
	}
	
	// 공탁관리번호를 이용한 공탁관련정보 조회
	@Override
	public List<DepoVO> selectDepoVOView(DepoVO searchVO) {
		return depoDao.selectDepotView(searchVO);
	}

	// 공탁담당자 및 대리인 조회
	@Override
	public List<DepoVO> selectCharList(SawonVO searchVO) {
		return depoDao.selectChar(searchVO);
	}
	
	//공탁정보 및 담당자 저장, 수정, 삭제
	@Override
	@Transactional
	public String dbAccessDepo(List<DepoVO> depoVO) {
		
		String saveKey = null;
		
		int size = depoVO.size();
        for (int i=0; i<size; i++) {
        	DepoVO depo = depoVO.get(i);
        	
        	DataSetRowTypeAccessor accessor = (DataSetRowTypeAccessor) depo;
			
    		if(accessor.getRowType() == DataSet.ROW_TYPE_INSERTED){
    			if(depo.getDepositmgrName() == null){
    				depoDao.insertDepoOnly(depo);
    			}else{
    				depoDao.insertDepoAll(depo);
    			}
    			saveKey = depo.getDepositDepoAdmNo();
    			
    		}else if(accessor.getRowType() == DataSet.ROW_TYPE_UPDATED){
    			depoDao.updateDepoList(depo);
    			depoDao.updateMgr(depo);
    		}else if(accessor.getRowType() == DataSet.ROW_TYPE_DELETED){
    			depoDao.deleteDepoList(depo);
    		}
    		
        }
        
        return saveKey;
		
	}
	
}
