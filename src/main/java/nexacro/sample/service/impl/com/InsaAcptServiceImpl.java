package nexacro.sample.service.impl.com;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import nexacro.sample.service.com.InsaAcptService;
import nexacro.sample.service.dao.ibatis.com.InsaAcptDAO;
import nexacro.sample.vo.com.InsaAcptVO;

import org.springframework.stereotype.Service;

import com.nexacro.spring.data.DataSetRowTypeAccessor;
import com.nexacro.xapi.data.DataSet;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;


@Service("insaAcptService")
public class InsaAcptServiceImpl extends EgovAbstractServiceImpl implements InsaAcptService {

	@Resource(name = "insaAcptDAO")
	private InsaAcptDAO insaAcptDAO;
	
	// 사원 승인내역 조회
	@Override
	public List<InsaAcptVO> selectInsaAcptList(InsaAcptVO insaAcptVO) {
		return insaAcptDAO.selectInsaAcptList(insaAcptVO);
	}

	// 사원 승인내역 정보 저장
	@Override
	public void saveInsaAcptList(List<InsaAcptVO> listInsaVO, String registerId) {
		
		
		
		for(int i = 0; i < listInsaVO.size(); i++){
			InsaAcptVO insaAcptVO = listInsaVO.get(i);
			if(insaAcptVO instanceof DataSetRowTypeAccessor){
				DataSetRowTypeAccessor accessor = (DataSetRowTypeAccessor) insaAcptVO;
				
				if(accessor.getRowType() == DataSet.ROW_TYPE_UPDATED){
					Map<String, Object> insaMap = new HashMap<String, Object>();
					insaMap.put("insaVO", insaAcptVO);
					insaMap.put("registerId", registerId);
					insaAcptDAO.saveInsaAcptList(insaMap);
					insaMap.clear();
				} else if(accessor.getRowType() == DataSet.ROW_TYPE_INSERTED){
					insaAcptDAO.insertInsaList(insaAcptVO);
					
				} else if(accessor.getRowType() == DataSet.ROW_TYPE_DELETED){
					insaAcptDAO.deleteInsaList(insaAcptVO);
				}
			}
		}
	}
	
	// 인사관리 정보 저장
	@Override
	public void saveInsaList(List<InsaAcptVO> listInsaVO, String registerId) {
		
		
		
		for(int i = 0; i < listInsaVO.size(); i++){
			InsaAcptVO insaAcptVO = listInsaVO.get(i);
			if(insaAcptVO instanceof DataSetRowTypeAccessor){
				DataSetRowTypeAccessor accessor = (DataSetRowTypeAccessor) insaAcptVO;
				
				if(accessor.getRowType() == DataSet.ROW_TYPE_UPDATED){
					Map<String, Object> insaMap = new HashMap<String, Object>();
					insaMap.put("insaVO", insaAcptVO);
					insaMap.put("registerId", registerId);
					insaAcptDAO.saveInsaList(insaMap);
					insaMap.clear();
				} else if(accessor.getRowType() == DataSet.ROW_TYPE_INSERTED){
					insaAcptDAO.insertInsaList(insaAcptVO);
					
				} else if(accessor.getRowType() == DataSet.ROW_TYPE_DELETED){
					insaAcptDAO.deleteInsaList(insaAcptVO);
				}
			}
		}
	}


}
