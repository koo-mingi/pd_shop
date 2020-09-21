package nexacro.sample.service.dao.ibatis.aprv;


import java.util.List;

import nexacro.sample.vo.approval.ApprovalTotalVO;
import nexacro.sample.vo.aprv.AprvListEmplVO;

import org.springframework.stereotype.Repository;

import com.nexacro.spring.dao.ibatis.NexacroIbatisAbstractDAO;

@Repository("aprvListEmplDAO")
public class AprvListEmplDAO extends NexacroIbatisAbstractDAO{
	
	public List<ApprovalTotalVO> getAprvInfo(ApprovalTotalVO vo){
		System.out.println("daos : "+vo.getAprvInfoSabun());
		return (List<ApprovalTotalVO>) list("aprv.AprvListEmplDAO.getAprvInfo", vo);
	}
	
	public List<AprvListEmplVO> getPayerInfo(AprvListEmplVO vo){
		return (List<AprvListEmplVO>) list("aprv.AprvListEmplDAO.getPayerInfo", vo);
	}
}
