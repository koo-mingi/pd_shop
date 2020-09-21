package nexacro.sample.service.impl.prgr;

import java.util.List;

import javax.annotation.Resource;

import nexacro.sample.service.dao.ibatis.prgr.Lawsuit_recDAO;
import nexacro.sample.service.prgr.Lawsuit_recService;
import nexacro.sample.vo.prgr.Lawsuit_recVO;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.spring.data.DataSetRowTypeAccessor;
import com.nexacro.xapi.data.DataSet;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;




@Service("lawsuit_recService")
public class Lawsuit_recServiceImpl extends EgovAbstractServiceImpl implements Lawsuit_recService{
	
	@Resource(name = "lawsuit_recDao")
	private Lawsuit_recDAO lawsuit_recDao;
	
	
	// 공탁관리번호 조회
	@Override
	public List<Lawsuit_recVO> getLawsuitRecSelect(Lawsuit_recVO searchVO) {
		
		return lawsuit_recDao.getLawsuitRecSelect(searchVO);
	}
	
	
	// 공탁관리번호를 이용한 공탁관련정보 조회
	@Override
	public List<Lawsuit_recVO> getLawsuitRecPladefSelect(Lawsuit_recVO searchVO) {
		
		return lawsuit_recDao.getLawsuitRecPladefSelect(searchVO);
	}
	
	
	// 공탁담당자 및 대리인 조회
	@Override
	public List<Lawsuit_recVO> getLawsuitRecDetailSelect(Lawsuit_recVO searchVO) {
		
		return lawsuit_recDao.getLawsuitRecDetailSelect(searchVO);
	}
	

	//공탁정보 및 담당자 저장, 수정, 삭제
		@Override
		@Transactional
		public void createReconcil(List<Lawsuit_recVO> searchVO) {
			int size = searchVO.size();
	        for (int i=0; i<size; i++) {
	        	Lawsuit_recVO Lawsuit_recVO = searchVO.get(i);
	        	
	        	DataSetRowTypeAccessor accessor = (DataSetRowTypeAccessor) Lawsuit_recVO;
				
	    		if(accessor.getRowType() == DataSet.ROW_TYPE_INSERTED){
	    			lawsuit_recDao.insertReconcil(Lawsuit_recVO);
	    		}else if(accessor.getRowType() == DataSet.ROW_TYPE_UPDATED){
	    			lawsuit_recDao.updateReconcil(Lawsuit_recVO);
	    		}else if(accessor.getRowType() == DataSet.ROW_TYPE_DELETED){
	    			lawsuit_recDao.deleteReconcil(Lawsuit_recVO);;
	    			
	    		}
	    		
	        }	
			
		}


		@Override
		public void createReconcil2(Lawsuit_recVO vo) {
			lawsuit_recDao.insertReconcil(vo);
			
		}
	
		
		


			
}
