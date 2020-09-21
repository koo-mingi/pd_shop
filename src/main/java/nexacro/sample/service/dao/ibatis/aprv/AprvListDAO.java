package nexacro.sample.service.dao.ibatis.aprv;


import java.util.List;

import nexacro.sample.vo.aprv.AprvListVO;

import org.springframework.stereotype.Repository;

import com.nexacro.spring.dao.ibatis.NexacroIbatisAbstractDAO;

@Repository("aprvListDAO")
public class AprvListDAO extends NexacroIbatisAbstractDAO{
	
	public List<AprvListVO> getAprvInfo(AprvListVO vo){
		return (List<AprvListVO>) list("aprv.AprvListDAO.getAprvInfo", vo);
	}
	
	public List<AprvListVO> getAprvInfoCnt(){
		return (List<AprvListVO>) list("aprv.AprvListDAO.getAprvInfoCnt");
	}
}
