package nexacro.sample.service.impl.aprv;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import nexacro.sample.service.aprv.AprvListEmplService;
import nexacro.sample.service.dao.ibatis.aprv.AprvListEmplDAO;
import nexacro.sample.vo.approval.ApprovalTotalVO;
import nexacro.sample.vo.aprv.AprvListEmplVO;

@Service("aprvListEmplService")
public class AprvListEmplServiceImpl implements AprvListEmplService {

	@Resource(name="aprvListEmplDAO")
	AprvListEmplDAO aprvListEmplDAO;
	
	@Override
	public List<ApprovalTotalVO> getAprvInfo(ApprovalTotalVO vo) {
		System.out.println("impl : "+vo.getAprvInfoSabun());
		return aprvListEmplDAO.getAprvInfo(vo);
	}

	@Override
	public List<AprvListEmplVO> getPayerInfo(AprvListEmplVO vo) {
		return aprvListEmplDAO.getPayerInfo(vo);
	}



	
}
