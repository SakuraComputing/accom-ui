import React from 'react';
import facilityList from '../../common/facilityList';

describe('facility List', () => {
    it('should return a list of facilities', () => {
        const data = [{ id: 1, label: 'Towel'}];
        const test = [<li key="1" label="Towel">Towel</li>];
        expect(facilityList(data)).toEqual(test)
    });
    it('should return null if no data is passed in', () => {
        const data = null;
        expect(facilityList(data)).toBeNull();
    });
});