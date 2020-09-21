package nexacro.sample.service.impl.aprv;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import nexacro.sample.service.aprv.AprvListService;
import nexacro.sample.service.dao.ibatis.aprv.AprvListDAO;
import nexacro.sample.vo.aprv.AprvListVO;

@Service("aprvListService")
public class AprvListServiceImpl implements AprvListService {

	@Resource(name="aprvListDAO")
	AprvListDAO aprvListDAO;

	@Override
	public List<AprvListVO> getAprvInfo(AprvListVO vo) {
		// TODO Auto-generated method stub
		return aprvListDAO.getAprvInfo(vo);
	}

	@Override
	public List<AprvListVO> getAprvInfoCnt() {
		// TODO Auto-generated method stub
		return aprvListDAO.getAprvInfoCnt();
	}
	




	
}
