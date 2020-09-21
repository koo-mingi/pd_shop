package nexacro.sample.service.impl.prgr;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import nexacro.sample.service.dao.ibatis.prgr.Pre_iwrDAO;
import nexacro.sample.service.prgr.Pre_iwrService;
import nexacro.sample.vo.prgr.MediationVO;
import nexacro.sample.vo.prgr.Pre_iwrVO;

import org.springframework.stereotype.Service;

import com.nexacro.spring.data.DataSetRowTypeAccessor;
import com.nexacro.xapi.data.DataSet;

@Service("pre_iwrService")
public class Pre_iwrServiceImpl implements Pre_iwrService {

	@Resource(name = "pre_iwrDao")
	private Pre_iwrDAO pre_iwrDao;

	//TAB_INST_ADM정보
	@Override
	public List<Pre_iwrVO> getInstAdm(Pre_iwrVO vo) {
		return pre_iwrDao.getInstAdm(vo);
	}
	
	//TAB_PRE_IWR정보
	@Override
	public List<Pre_iwrVO> getPreIwr(Pre_iwrVO vo) {
		return pre_iwrDao.getPreIwr(vo);
	}
	
	//판사Id와 이름 정보
	@Override
	public List<Pre_iwrVO> getJudgName() {
		return pre_iwrDao.getJudgName();
	}
	
	//변호사Id와 이름 정보
	@Override
	public List<Pre_iwrVO> getLawyerName() {
		return pre_iwrDao.getLawyerName();
	}

	@Override
	public String pre_iwrSave(List<Pre_iwrVO> list) {
		
		String confirm = null;
		
		for (int i = 0; i < list.size(); i++) {
			Pre_iwrVO pre_iwrVO = list.get(i);
			DataSetRowTypeAccessor accessor = (DataSetRowTypeAccessor) pre_iwrVO;
			
			if (accessor.getRowType() == DataSet.ROW_TYPE_INSERTED) {
				pre_iwrDao.pre_iwrInsert(pre_iwrVO);
				confirm = "저장";
			} else if (accessor.getRowType() == DataSet.ROW_TYPE_UPDATED) {
				pre_iwrDao.pre_iwrUpdate(pre_iwrVO);
				confirm = "수정";
			} else if (accessor.getRowType() == DataSet.ROW_TYPE_DELETED) {
				pre_iwrDao.pre_iwrDelete(pre_iwrVO);
				confirm = "삭제";
			}
		}
		return confirm;
	}
	
	
	
	
	/*
	//준비서면조회
	@Override
	public List<Pre_iwrVO> get_pre_iwr(Map<String, Object> get_pre_iwrMap) {
		// TODO Auto-generated method stub
		return pre_iwrDao.get_pre_iwr(get_pre_iwrMap);
	}

	// 저장, 수정, 삭제
	@Override
	public String pre_iwrsave(List<Pre_iwrVO> Pre_iwrVO, String lawAdmNo, String instCode) {
		String confirm = null;
		int size = Pre_iwrVO.size();

		for (int i = 0; i < size; i++) {
			Pre_iwrVO pre_iwrVO = Pre_iwrVO.get(i);
			DataSetRowTypeAccessor accessor = (DataSetRowTypeAccessor) pre_iwrVO;

			if (accessor.getRowType() == DataSet.ROW_TYPE_INSERTED) {
				pre_iwrDao.pre_iwrSave(pre_iwrVO);
				confirm = "저장";
			} else if (accessor.getRowType() == DataSet.ROW_TYPE_UPDATED) {
				Map<String, Object> detailCodeMap = new HashMap<String, Object>();
				detailCodeMap.put("lawAdmNo", lawAdmNo);
				detailCodeMap.put("instCode", instCode);
				pre_iwrDao.pre_iwrUpdate(pre_iwrVO);
				detailCodeMap.clear();
				confirm = "수정";
			} else if (accessor.getRowType() == DataSet.ROW_TYPE_DELETED) {
				pre_iwrDao.pre_iwrDelect(pre_iwrVO);
			}

		}
		return confirm;
	}*/
}
