package nexacro.sample.service.impl.apprline;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import nexacro.sample.service.apprline.ApprLineService;
import nexacro.sample.service.dao.ibatis.apprline.ApprLineDAO;
import nexacro.sample.service.dao.ibatis.noti.LawsuitNotiDAO;
import nexacro.sample.service.noti.LawsuitNotiService;
import nexacro.sample.vo.apprline.ApprInsaVO;
import nexacro.sample.vo.apprline.ApprLineVO;
import nexacro.sample.vo.lawsuit.Lawsuit_ListVO;
import nexacro.sample.vo.noti.LawsuitNotiVO;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.spring.data.DataSetRowTypeAccessor;
import com.nexacro.xapi.data.DataSet;

import egovframework.rte.fdl.cmmn.AbstractServiceImpl;

@Service("apprlineservice")
public class ApprLineImpl extends AbstractServiceImpl implements
		ApprLineService {

	@Resource(name = "apprlineDAO")
	private ApprLineDAO apprlineDAO;

	// 결재라인조회
	@Override
	public List getApprovalLineList() throws Exception {

		return apprlineDAO.getApprovalLineList();
	}

	@Override
	public List getApprovalLineListCode(ApprLineVO apprLineVo) throws Exception {
		// TODO Auto-generated method stub
		return apprlineDAO.getApprovalLineListCode(apprLineVo);

	}

	@Override
	public List getApprLineDetailList(ApprLineVO apprLineVo) throws Exception {
		return apprlineDAO.getApprLineDetailList(apprLineVo);
	}

	// 사원조회
	@Override
	public List getApprovalList(Map<String, Object> param) throws Exception {
		return apprlineDAO.getApprovalList(param);
	}

	// 결재라인삭제
	@Override
	public void DeleteAppr(Map<String, Object> param) throws Exception {
		apprlineDAO.deleteAppr(param);
	}

	// 결재라인등록
	@Override
	public void InsertAppr( List<ApprLineVO>apprLineVO) throws Exception {
String saveKey = null;
		
		int size = apprLineVO.size();
		for(int i=0; i<size; i++)
		{
			ApprLineVO appr = apprLineVO.get(i);
			
			DataSetRowTypeAccessor accessor = (DataSetRowTypeAccessor) appr;
			
			if(accessor.getRowType() == DataSet.ROW_TYPE_INSERTED)
			{
				apprlineDAO.appInsert(appr);
			}else if(accessor.getRowType() == DataSet.ROW_TYPE_UPDATED){
				apprlineDAO.apprUpdate(appr);
			}
			//saveKey = appr.getAprvlineAdmProcCode();
			
		}
	
	}
}
