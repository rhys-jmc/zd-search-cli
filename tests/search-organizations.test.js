const { exec } = require("child_process");

describe("search organizations", () => {
  test("search by external_id", done => {
    exec(
      "node ./src/index.js organizations --external_id 9270ed79-35eb-4a38-a46f-35725197ea8d",
      (_, stdout) => {
        expect(stdout).toEqual(
          '[{"url":"http://initech.zendesk.com/api/v2/organizations/101.json","external_id":"9270ed79-35eb-4a38-a46f-35725197ea8d","name":"Enthaze","domain_names":["kage.com","ecratic.com","endipin.com","zentix.com"],"created_at":"2016-05-21T11:10:28 -10:00","details":"MegaCorp","shared_tickets":false,"tags":["Fulton","West","Rodriguez","Farley"]}]\n'
        );

        done();
      }
    );
  });

  test("search by name", done => {
    exec("node ./src/index.js organizations --name Nutralab", (_, stdout) => {
      expect(stdout).toEqual(
        '[{"url":"http://initech.zendesk.com/api/v2/organizations/102.json","external_id":"7cd6b8d4-2999-4ff2-8cfd-44d05b449226","name":"Nutralab","domain_names":["trollery.com","datagen.com","bluegrain.com","dadabase.com"],"created_at":"2016-04-07T08:21:44 -10:00","details":"Non profit","shared_tickets":false,"tags":["Cherry","Collier","Fuentes","Trevino"]}]\n'
      );

      done();
    });
  });

  test("search by domain names", done => {
    exec(
      "node ./src/index.js organizations --domain_names anixang.com",
      (_, stdout) => {
        expect(stdout).toEqual(
          '[{"url":"http://initech.zendesk.com/api/v2/organizations/104.json","external_id":"f6eb60ad-fe37-4a45-9689-b32031399f93","name":"Xylar","domain_names":["anixang.com","exovent.com","photobin.com","marqet.com"],"created_at":"2016-03-21T10:11:18 -11:00","details":"MegaCörp","shared_tickets":false,"tags":["Hendricks","Mclaughlin","Stephens","Garner"]}]\n'
        );

        done();
      }
    );
  });

  test("search by multiple domain names", done => {
    exec(
      "node ./src/index.js organizations --domain_names farmage.com,extrawear.com",
      (_, stdout) => {
        expect(stdout).toEqual(
          '[{"url":"http://initech.zendesk.com/api/v2/organizations/105.json","external_id":"52f12203-6112-4fb9-aadc-70a6c816d605","name":"Koffee","domain_names":["farmage.com","extrawear.com","bulljuice.com","enaut.com"],"created_at":"2016-06-06T02:50:27 -10:00","details":"MegaCorp","shared_tickets":false,"tags":["Jordan","Roy","Mckinney","Frost"]}]\n'
        );

        done();
      }
    );
  });

  test("search by details", done => {
    exec(
      'node ./src/index.js organizations --details "Non profit"',
      (_, stdout) => {
        expect(JSON.parse(stdout).length).toEqual(7);

        done();
      }
    );
  });

  test("search by tags", done => {
    exec("node ./src/index.js organizations --tags Nolan", (_, stdout) => {
      expect(stdout).toEqual(
        '[{"url":"http://initech.zendesk.com/api/v2/organizations/106.json","external_id":"2355f080-b37c-44f3-977e-53c341fde146","name":"Qualitern","domain_names":["gology.com","myopium.com","synkgen.com","bolax.com"],"created_at":"2016-07-23T09:48:02 -10:00","details":"Artisân","shared_tickets":false,"tags":["Nolan","Rivas","Morse","Conway"]}]\n'
      );

      done();
    });
  });

  test("search by multiple tags", done => {
    exec(
      "node ./src/index.js organizations --tags Travis,Clarke",
      (_, stdout) => {
        expect(stdout).toEqual(
          '[{"url":"http://initech.zendesk.com/api/v2/organizations/107.json","external_id":"773cc8fd-12e6-4f0b-9709-a370d98ee2e0","name":"Sulfax","domain_names":["comvey.com","quantalia.com","velity.com","enormo.com"],"created_at":"2016-01-12T01:16:06 -11:00","details":"MegaCörp","shared_tickets":true,"tags":["Travis","Clarke","Glenn","Santos"]}]\n'
        );

        done();
      }
    );
  });

  test("search by all options", done => {
    exec(
      'node ./src/index.js organizations --external_id be72663b-338d-42f4-bd52-cf6584cad674 --name Zolarex --domain_names elemantra.com,zizzle.com,miraclis.com,overplex.com --details "Non profit" --tags Rosales,Middleton,Garrett,Page',
      (_, stdout) => {
        expect(stdout).toEqual(
          '[{"url":"http://initech.zendesk.com/api/v2/organizations/108.json","external_id":"be72663b-338d-42f4-bd52-cf6584cad674","name":"Zolarex","domain_names":["elemantra.com","zizzle.com","miraclis.com","overplex.com"],"created_at":"2016-07-26T09:35:57 -10:00","details":"Non profit","shared_tickets":false,"tags":["Rosales","Middleton","Garrett","Page"]}]\n'
        );

        done();
      }
    );
  });
});
