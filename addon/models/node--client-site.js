import DS from 'ember-data';

export default DS.Model.extend({
  nid: DS.attr(),
  uuid: DS.attr(),
  title: DS.attr('string'),
  created: DS.attr(),
  status: DS.attr(),
  changed: DS.attr(),
  fieldAboutIntro: DS.attr('string'),
  fieldCompanyEmail: DS.attr('string'),
  fieldCompanyFacebook: DS.attr('string'),
  fieldCompanyFax: DS.attr('string'),
  fieldCompanyName: DS.attr('string'),
  fieldCompanyTel: DS.attr('string'),
  fieldCompanyTwitter: DS.attr('string'),
  fieldCompanyYelp: DS.attr('string'),
  fieldContactIntro: DS.attr('string'),
  fieldDomain: DS.attr('string'),
  fieldFullDomain: DS.attr('string'),
  fieldHomeIntro: DS.attr('string'),
  fieldLat: DS.attr(),
  fieldLng: DS.attr(),
  fieldServicesIntro: DS.attr('string'),
  fieldUserId: DS.attr('string')
});
