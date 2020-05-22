package com.pageturner.www.sql;
/**
 * 우리 SQL
 * @author 2조
 *
 */
public class BookSQL {
	public final int ADD_USER = 1001;
	
	public String getSQL(int code) {
		StringBuffer buff = new StringBuffer();
		switch(code) {
		case ADD_USER:
			buff.append("insert into membertab(mno, id, pw, name, nickname, birthdate, gen, mail, tel, interest, describe) "); 
			buff.append("values( "); 
			buff.append("    (select nvl(max(mno)+1, 1000) from membertab), "); 
			buff.append("    ?, ?, ?, ?, TO_DATE(?,'yyMMdd') , ?, ?, ?, ?, ? "); 
			buff.append(")");
			break;
		}
		
		return buff.toString();
	}
	
}
