var subject = require('./subject.js')
var mock = require('mock-fs');
subject.inc('',undefined);
subject.inc('',1);
subject.inc(0,1);
subject.inc(01,1);
subject.inc(-1,1);
subject.inc(-1,1);
subject.fileTest('path/fileExists','');
subject.fileTest('path/fileExists','path/fileExists');
subject.fileTest('path/fileExists','pathContent/file1');
subject.fileTest('path/fileExists','pathContent/file1');
mock({"path/fileExists":{},"pathContent":{"file2":""}});
	subject.fileTest('path/fileExists','pathContent/file1');
mock.restore();
mock({"path/fileExists":{},"pathContent":{"file1":"text content"}});
	subject.fileTest('path/fileExists','pathContent/file1');
mock.restore();
mock({"path/fileExists":{},"pathContent":{"file1":""}});
	subject.fileTest('path/fileExists','pathContent/file1');
mock.restore();
mock({"path/fileExists":{},"pathContent":{"file1":"text content"}});
	subject.fileTest('path/fileExists','pathContent/file1');
mock.restore();
mock({});
	subject.fileTest('path/fileExists','pathContent/file1');
mock.restore();
mock({});
	subject.fileTest('path/fileExists','pathContent/file1');
mock.restore();
mock({});
	subject.fileTest('path/fileExists','pathContent/file1');
mock.restore();
mock({});
	subject.fileTest('path/fileExists','pathContent/file1');
mock.restore();
mock({});
	subject.fileTest('path/fileExists','pathContent/file1');
mock.restore();
mock({"path/fileExists":{},"pathContent":{"file2":""}});
	subject.fileTest('path/fileExists','pathContent/file1');
mock.restore();
subject.normalize('');
subject.normalize('1111111111','(NNN) NNN-NNNN','');
subject.normalize('2222222222','(NNN) NNN-NNNN',{"normalize": true});
subject.normalize('1-918-836-4570','###-###-#### x####','');
subject.format('','','');
subject.format('1111111111','(NNN) NNN-NNNN','');
subject.format('2222222222','(NNN) NNN-NNNN',{"normalize": true});
subject.format('1-641-577-5510','1-###-###-#### x###','');
subject.blackListNumber('');
subject.blackListNumber('1111111111','(NNN) NNN-NNNN','');
subject.blackListNumber('2222222222','(NNN) NNN-NNNN',{"normalize": true});
subject.blackListNumber('(480) 542-9515 x8141','###-###-####','');
subject.blackListNumber('2121111111');
