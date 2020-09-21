package nexacro.sample.service.impl.prgr;

import java.util.List;

import javax.annotation.Resource;

import nexacro.sample.service.dao.ibatis.prgr.Law_fixinfoDAO;
import nexacro.sample.service.prgr.Law_fixinfoService;
import nexacro.sample.vo.prgr.Law_fixinfoVO;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.spring.data.DataSetRowTypeAccessor;
import com.nexacro.xapi.data.DataSet;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service("law_fixinfoService")
public class Law_fixinfoServiceImpl extends EgovAbstractServiceImpl implements Law_fixinfoService{
	
	@Resource(name = "law_fixinfoDao")
	private Law_fixinfoDAO law_fixinfoDao;
	
	
	// 소송관리번호 조회
	@Override
	public List<Law_fixinfoVO> getLawsuitRecSelect(Law_fixinfoVO searchVO) {
		
		return law_fixinfoDao.getLawsuitRecSelect(searchVO);
	}
	
	
	// 소송기일정보 및 기일상세정보 조회
	@Override
	public List<Law_fixinfoVO> getLawFixinfoSelect(Law_fixinfoVO searchVO) {
		
		return law_fixinfoDao.getLawFixinfoSelect(searchVO);
	}
	
	
	
	//저장, 수정, 삭제
			@Override
			public void getLawFixinfoCud(List<Law_fixinfoVO> searchVO) {
				int size = searchVO.size();
		        for (int i=0; i<size; i++) {
		        	Law_fixinfoVO Law_fixinfoVO = searchVO.get(i);
		        	
		        	DataSetRowTypeAccessor accessor = (DataSetRowTypeAccessor) Law_fixinfoVO;
					
		    		if(accessor.getRowType() == DataSet.ROW_TYPE_INSERTED){
		    			law_fixinfoDao.insertFixinfo(Law_fixinfoVO);
		    		}else if(accessor.getRowType() == DataSet.ROW_TYPE_UPDATED){
		    			law_fixinfoDao.updateFixinfo(Law_fixinfoVO);
		    		}else if(accessor.getRowType() == DataSet.ROW_TYPE_DELETED){
		    			law_fixinfoDao.deleteFixinfo(Law_fixinfoVO);;
		    			
		    		}
		    		
		        }	
				
			}
			
}
