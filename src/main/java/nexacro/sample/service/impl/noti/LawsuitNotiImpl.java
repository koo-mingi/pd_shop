package nexacro.sample.service.impl.noti;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import nexacro.sample.service.dao.ibatis.noti.LawsuitNotiDAO;
import nexacro.sample.service.noti.LawsuitNotiService;
import nexacro.sample.vo.noti.LawsuitNotiVO;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.spring.data.DataSetRowTypeAccessor;
import com.nexacro.xapi.data.DataSet;

import egovframework.rte.fdl.cmmn.AbstractServiceImpl;

@Service("lawsuitnotiservice")
public class LawsuitNotiImpl extends AbstractServiceImpl implements LawsuitNotiService{
	
	@Resource(name = "lawsuitnotiDAO")
	private LawsuitNotiDAO lawsuitnotiDAO;
	
	// 소송고지 내용 가져오기
	@Override
	public List<LawsuitNotiVO> getLawsuitNotiList(LawsuitNotiVO lawsuitNotiVO) 
	{
		return lawsuitnotiDAO.getLawsuitNotiList(lawsuitNotiVO);
	}

	//소송고지 등록 수정 삭제
	@Override
	@Transactional
	public String insertLawsuitNoti(List<LawsuitNotiVO> lawsuitNotiVO)
	{
		//String saveKey = null;
		String lawsuitNotiAdmNo = "";
		
		int size = lawsuitNotiVO.size();
		for(int i=0; i<size; i++)
		{
			LawsuitNotiVO lawsuitNoti = lawsuitNotiVO.get(i);
			
			DataSetRowTypeAccessor accessor = (DataSetRowTypeAccessor) lawsuitNoti;
			
			if(accessor.getRowType() == DataSet.ROW_TYPE_INSERTED)
			{
				lawsuitNotiAdmNo = lawsuitnotiDAO.insertLawsuitNoti(lawsuitNoti);
			}else if(accessor.getRowType() == DataSet.ROW_TYPE_UPDATED){
				lawsuitnotiDAO.updateLawsuitNoti(lawsuitNoti);
			}else if(accessor.getRowType() == DataSet.ROW_TYPE_DELETED){
				lawsuitnotiDAO.deleteLawsuitNoti(lawsuitNoti);
			}
			//saveKey = lawsuitNoti.getLawsuitNotiAdmNo();
			//lawsuitNotiAdmNo = lawsuitnotiDAO.insertLawsuitNoti((LawsuitNotiVO) lawsuitNotiVO);
			System.out.println("lawsuitNotiAdmNo :::::::++"+lawsuitNotiAdmNo);
		}
		return lawsuitNotiAdmNo;
	}

	@Override
	public List lawsuitNotiStatement(Map<String, Object> selectMap)
			throws Exception {
		return lawsuitnotiDAO.lawsuitNotiStatement(selectMap);
	}
	
}




