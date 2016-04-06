var expect = require('chai').expect;

describe('Course', () => {
	describe('create', () => {

		it('should return completedAt as a Date object when sessions are not specified', () => {
			return Course.create({ completedAt: new Date() }).then((createdCourse) => {
				expect(createdCourse.completedAt).to.be.a('date');
			});
		});

		it('should return completedAt as a Date object when sessions are specified', () => {
			return Session.create([{}, {}]).then((createdSessions) => {
				return Course.create({ completedAt: new Date(), sessions: _.map(createdSessions, 'id') }).then((createdCourse) => {
					expect(createdCourse.completedAt).to.be.a('date');
				});
			});
		});

	});
});