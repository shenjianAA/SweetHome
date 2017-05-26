SET NAMES UTF8;
DROP DATABASE IF EXISTS sweethome;
CREATE DATABASE sweethome CHARSET=UTF8;
USE sweethome;
CREATE TABLE des_case(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  cimg VARCHAR(32),
  tabs VARCHAR(100)
);
INSERT INTO des_case VALUES
(NULL,"images/case/case_02.jpg","60平,卫生间,现代简约风"),
(NULL,"images/case/case_03.jpg","60平,厨房,现代简约风"),
(NULL,"images/case/case_04.jpg","60平,客厅,现代简约风"),
(NULL,"images/case/case_05.jpg","60平,餐厅,现代简约风"),
(NULL,"images/case/case_06.jpg","80平,卧室,现代简约风"),
(NULL,"images/case/case_07.jpg","80平,厨房,现代简约风"),
(NULL,"images/case/case_08.jpg","80平,客厅,现代简约风"),
(NULL,"images/case/case_09.jpg","80平,餐厅,现代简约风"),
(NULL,"images/case/case_10.jpg","80平,卫生间,现代简约风"),
(NULL,"images/case/case_11.jpg","100平,卧室,地中海风"),
(NULL,"images/case/case_12.jpg","100平,卫生间,地中海风"),
(NULL,"images/case/case_13.jpg","100平,厨房,地中海风"),
(NULL,"images/case/case_14.jpg","100平,客厅,地中海风"),
(NULL,"images/case/case_15.jpg","100平,餐厅,地中海风"),
(NULL,"images/case/case_16.jpg","100平,卫生间,美式"),
(NULL,"images/case/case_17.jpg","100平,卧室,美式"),
(NULL,"images/case/case_18.jpg","100平,厨房,美式"),
(NULL,"images/case/case_19.jpg","100平,客厅,美式"),
(NULL,"images/case/case_20.jpg","100平,餐厅,美式"),
(NULL,"images/case/case_21.jpg","150平,卧室,新中式风"),
(NULL,"images/case/case_22.jpg","150平,厨房,新中式风"),
(NULL,"images/case/case_23.jpg","150平,客厅,新中式风"),
(NULL,"images/case/case_24.jpg","150平,餐厅,新中式风"),
(NULL,"images/case/case_25.jpg","别墅,卧室,新中式风"),
(NULL,"images/case/case_26.jpg","别墅,厨房,新中式风"),
(NULL,"images/case/case_27.jpg","别墅,客厅,新中式风"),
(NULL,"images/case/case_28.jpg","别墅,餐厅,新中式风"),
(NULL,"images/case/case_29.jpg","厨房,新中式风"),
(NULL,"images/case/case_30.jpg","儿童房"),
(NULL,"images/case/case_31.jpg","儿童房"),
(NULL,"images/case/case_32.jpg","儿童房"),
(NULL,"images/case/case_33.jpg","儿童房"),
(NULL,"images/case/case_34.jpg","儿童房"),
(NULL,"images/case/case_35.jpg","卫生间,地中海风"),
(NULL,"images/case/case_36.jpg","60平,卫生间"),
(NULL,"images/case/case_37.jpg","卧室,现代简约风");
CREATE TABLE user_list(
     uid INT PRIMARY KEY AUTO_INCREMENT,
     mobile VARCHAR(20),
     uName VARCHAR(32),
     pwd VARCHAR(32)
);