const filterRecord = require('./filterRecord');

describe('filterRecord', () => {
  const carOwners = [
    {
      first_name: 'Scot',
      last_name: 'Hainning',
      email: 'shainning0@so-net.ne.jp',
      country: 'Thailand',
      car_model: 'Lincoln',
      car_model_year: '1996',
      car_color: 'Maroon',
      gender: 'Male',
      job_title: 'Staff Accountant III',
      bio:
        'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
    },
    {
      first_name: 'Vannie',
      last_name: 'Fitzer',
      email: 'vfitzer1@samsung.com',
      country: 'France',
      car_model: 'Chrysler',
      car_model_year: '2005',
      car_color: 'Green',
      gender: 'Female',
      job_title: 'VP Quality Control',
      bio:
        'Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    },
    {
      first_name: 'Sissy',
      last_name: 'Willbourne',
      email: 'swillbourne2@xinhuanet.com',
      country: 'Bolivia',
      car_model: 'Lexus',
      car_model_year: '2004',
      car_color: 'Puce',
      gender: 'Female',
      job_title: 'Staff Accountant I',
      bio:
        'Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    },
  ];

  describe('Empty gender, countries,colors field means all records within the year range', () => {
    const filter = {
      start_year: 1990,
      end_year: 2005,
      gender: '',
      countries: '',
      colors: '',
    };

    it('returns all records in the year range', () => {
      const result = filterRecord(filter, carOwners);

      expect(result.length).toEqual(3);
      expect(result).toEqual(carOwners);
    });
  });

  describe('Returns the expected owner objects', () => {
    const filter = {
      start_year: 2000,
      end_year: 2005,
      gender: 'female',
      countries: 'france,bolivia',
      colors: 'Puce',
    };

    it('returns the exact match from the record based on year, gender, countries and colors.', () => {
      const result = filterRecord(filter, carOwners);

      expect(result.length).toEqual(1);
      expect(result).toEqual([carOwners[2]]);
    });
  });

  describe('Returns empty array if no match is found', () => {
    const filter = {
      start_year: 3000,
      end_year: 4005,
      gender: 'male',
      countries: '',
      colors: '',
    };

    it('Return type is an empty array', () => {
      const result = filterRecord(filter, carOwners);

      expect(result.length).toEqual(0);
      expect(result).toEqual([]);
    });
  });

  describe('Filter is not case sensitive', () => {
    const filter = {
      start_year: 1990,
      end_year: 2000,
      gender: 'MALE',
      countries: 'THaiLand',
      colors: 'maROOn,GOLD,ORANGE,lemon',
    };

    it('Return type is an empty array', () => {
      const result = filterRecord(filter, carOwners);

      expect(result.length).toEqual(1);
      expect(result).toEqual([carOwners[0]]);
    });
  });
});
