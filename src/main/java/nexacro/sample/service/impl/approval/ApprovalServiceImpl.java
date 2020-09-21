package nexacro.sample.service.impl.approval;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import nexacro.sample.service.approval.ApprovalService;
import nexacro.sample.service.dao.ibatis.approval.ApprovalDAO;
import nexacro.sample.vo.approval.ApprovalAllVo;
import nexacro.sample.vo.approval.ApprovalTotalVO;
import nexacro.sample.vo.approval.ApprovalDefVO;
import nexacro.sample.vo.approval.ApprovalProgVO;
import nexacro.sample.vo.approval.ApprovalTotalVO;










import nexacro.sample.vo.exam.ExamVO;

import org.springframework.stereotype.Service;

import com.nexacro.spring.data.DataSetRowTypeAccessor;
import com.nexacro.xapi.data.DataSet;

import egovframework.rte.fdl.cmmn.AbstractServiceImpl;

@Service("approvalService")
public class ApprovalServiceImpl extends AbstractServiceImpl implements ApprovalService{
	
	@Resource(name = "approvalDAO")
	private ApprovalDAO approvalDAO;

	
	//전체결재진행 조회
	@Override
	public List<ApprovalAllVo> getApprovalAllList(Map<String, Object> params) {
		System.out.println("impl start");
		return approvalDAO.getApprovalAllList(params);
	
	}

	//전체결재진행 조회
	@Override
	public List<ApprovalAllVo> getApprovalAllListPOP(Map<String, Object> params) {
		System.out.println("popstart");
		return approvalDAO.getApprovalAllListPOP(params);
	
	}

	@Override
	public List<ApprovalProgVO> getApprovalWriter(String sabun) {
		return approvalDAO.getApprovalWriter(sabun);
		
	}


	// 기안자 & 작성자 조회.
	@Override
	public void createProg(List<ApprovalDefVO> voList, String rowType) throws SQLException {
		// TODO Auto-generated method stub
		System.out.println("요기?");
		for(int i = 0 ; i < voList.size(); i++){
			ApprovalDefVO vo = voList.get(i);

			/**
			 * 2020.02.04 최광훈
			 * 원인은 잘 모르겠지만 vo가 DataSetRowTypeAccessor로
			 * 정상적으로 형변환이 되지 않아서
			 * 화면단에서 rowType을 String으로 받아서 작성함.. 
			 */
			//DataSetRowTypeAccessor accessor = (DataSetRowTypeAccessor) vo;
			//System.out.println("@@@@@@"+accessor.getRowType());
			
			if(rowType.equals("UPDATE")){
				approvalDAO.updateProg(vo);
			} else if(rowType.equals("INSERT")){
				approvalDAO.insertProg(vo);
				
			}
		}
		
/*//				Object vo = new Object();	
//				HashMap voMap = (HashMap<String, Object>) voObject;
				
//				List voInsertList = (List) voMap.get("insert");		//입력
				
//				for (int i = 0; i < voInsertList.size(); i++){
//					vo = voInsertList.get(i);
					approvalDAO.insertProg((ApprovalDefVO)vo);
//				}
					
//				List voUpdateList = (List) voMap.get("update");		//수정

//				for (int i = 0; i < voUpdateList.size(); i++){
//					vo = voUpdateList.get(i);
					approvalDAO.updateProg((ApprovalDefVO)vo);
//				}
*/		
	}

		//결재진행 전체
		@Override
		public List<ApprovalTotalVO> getApprovalStats(ApprovalTotalVO approvalTotalVO) {		
			return approvalDAO.getApprovalStats(approvalTotalVO);
		}


	@Override
	public List<ApprovalTotalVO> getApprovalPigList(ApprovalTotalVO approvalTotalVO) {
		return approvalDAO.getApprovalPigList(approvalTotalVO);
	}
	
	
	//결제라인 리스트 가져오기 - approval
	@Override
	public List<ApprovalTotalVO> getApprovalLineList(ApprovalTotalVO approvalTotalVO) {
		return approvalDAO.getApprovalLineList(approvalTotalVO);
	}
	
		

	//결재리스트 전체조회
	@Override
	public List<ApprovalTotalVO> getApprovalTotalList(ApprovalTotalVO approvalTotalVO) {		
		return approvalDAO.getApprovalTotalList(approvalTotalVO);
	}
	
	
	//결재자 정보 조회
	@Override
	public List<ApprovalTotalVO> getAprvInsertList(ApprovalTotalVO approvalTotalVO) {		
		return approvalDAO.getAprvInsertList(approvalTotalVO);
	}
	
	
	// 1차 Comment 수정
	@Override
	public void updateComment(List<ApprovalTotalVO> voList) throws Exception {

		for(ApprovalTotalVO vo : voList) {
			DataSetRowTypeAccessor accessor = (DataSetRowTypeAccessor)vo;
			
			if(accessor.getRowType() == DataSet.ROW_TYPE_INSERTED){
				
			}else if(accessor.getRowType() == DataSet.ROW_TYPE_UPDATED){
				approvalDAO.updateComment(vo);
			}
		}
		

	}


	@Override
	public void rejectComment(List<ApprovalTotalVO> voList) {
		for(ApprovalTotalVO vo : voList) {
			DataSetRowTypeAccessor accessor = (DataSetRowTypeAccessor)vo;
			
			if(accessor.getRowType() == DataSet.ROW_TYPE_INSERTED){
				
			}else if(accessor.getRowType() == DataSet.ROW_TYPE_UPDATED){
				approvalDAO.rejectComment(vo);
			}
		}

	}


	@Override
	public void approvalDeleteComment(ApprovalTotalVO approvalTotalVO) throws Exception {
		approvalDAO.approvalDeleteComment(approvalTotalVO);
	}


	@Override
	public void createComment(List<ApprovalTotalVO> voList) throws Exception {
		for(ApprovalTotalVO vo : voList){
			DataSetRowTypeAccessor accessor = (DataSetRowTypeAccessor)vo;
			
			if(accessor.getRowType() == DataSet.ROW_TYPE_INSERTED){
				approvalDAO.insertComment(vo);
			} else if(accessor.getRowType() == DataSet.ROW_TYPE_UPDATED){

			}
		}
	}


	@Override
	public void approvalDeleteComment4(ApprovalTotalVO approvalTotalVO)	throws Exception {
		approvalDAO.approvalDeleteComment4(approvalTotalVO);
	}
	
	
	
	
	
}




