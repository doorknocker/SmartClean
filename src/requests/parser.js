export default (array) =>
  array.reduce((acc, { insid, dom, dow, hour, SumHourly }) => {
    if (!acc[insid]) {
      acc[insid] = {
        dom,
        dow,
        hour,
        SumHourly,
      };
      return acc;
    }
    acc[insid] = {
      dom: dom + acc[insid].dom,
      dow: dow + acc[insid].dow,
      hour: hour + acc[insid].hour,
      SumHourly: SumHourly + acc[insid].SumHourly,
    };
    return acc;
  }, {});
