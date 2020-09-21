package nexacro.sample.service.aprv;

import java.util.List;

import nexacro.sample.vo.approval.ApprovalTotalVO;
import nexacro.sample.vo.aprv.AprvListEmplVO;

public interface AprvListEmplService {

	public List<ApprovalTotalVO> getAprvInfo(ApprovalTotalVO vo);
	
	public List<AprvListEmplVO> getPayerInfo(AprvListEmplVO vo);
}
