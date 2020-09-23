package nexacro.shop.service;

import java.util.List;

import nexacro.shop.vo.UserVO;;

/**
 * Test를 위한 Servlce Sample Intreface
 * 
 * @author Park SeongMin
 * @since 08.12.2015
 * @version 1.0
 * @see
 */
public interface UserService {

    List<UserVO> selectUserVOList(UserVO searchVO);

    void modifyMultiUserVO(List<UserVO> modifyList);

}
