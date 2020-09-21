package nexacro.sample.service.impl.legalofficials;

import java.util.List;

import javax.annotation.Resource;

import nexacro.sample.service.dao.ibatis.legalofficials.LegalOfficialsDAO;
import nexacro.sample.service.legalofficials.LagelOfficialsService;
import nexacro.sample.vo.legalofficials.LegalOfficialsVO;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.spring.data.DataSetRowTypeAccessor;
import com.nexacro.xapi.data.DataSet;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service("lagelOfficialsService")
public class LegalOfficials_ServiceImpl extends EgovAbstractServiceImpl implements LagelOfficialsService{
	
	@Resource(name = "legalOfficialsDAO")
	private LegalOfficialsDAO legalOfficialsDAO;
	
	
	
	
	@Override
	@Transactional
	public int legalOfficialsMgr(List<LegalOfficialsVO> LegalOfficialsVO) {
		int result = 0;
		for (int i = 0; i < LegalOfficialsVO.size(); i++) {
			LegalOfficialsVO ListVO = LegalOfficialsVO.get(i);
			DataSetRowTypeAccessor accessor = (DataSetRowTypeAccessor) ListVO;
			if (accessor.getRowType() == DataSet.ROW_TYPE_UPDATED) {
				legalOfficialsDAO.updateLegalOfficials(ListVO);
			}else if(accessor.getRowType() == DataSet.ROW_TYPE_INSERTED){
				legalOfficialsDAO.insertLegalOfficials(ListVO);
    		}	
		}
		return result;
	}	
}
