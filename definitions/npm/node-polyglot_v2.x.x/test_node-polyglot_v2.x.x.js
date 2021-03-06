import Polyglot from "node-polyglot";

const instance = new Polyglot({
  phrases: {},
  locale: "foo",
  allowMissing: true,
  onMissingKey: (key, opts, locale) => {
    console.log(key.length, Object.keys(opts), locale.length);

    return "foo";
  }
});
new Polyglot();

// $FlowExpectedError
new Polyglot("foo");

Polyglot.transformPhrase("foo").length;
Polyglot.transformPhrase("foo", {}).length;
Polyglot.transformPhrase("foo", {}, "en-US").length;

instance.extend({ foo: "bar" });

// $FlowExpectedError
instance.extend("foo");

instance.has("foo");

// $FlowExpectedError
instance.has(1);

instance.t("foo").length;
instance.t("foo", {}).length;

// $FlowExpectedError
instance.t(2);

instance.locale("foo").length;
instance.locale().length;

// $FlowExpectedError
instance.locale(2);

instance.unset("foo");
instance.unset({});

// $FlowExpectedError
instance.unset(2);

instance.clear();

instance.replace({});

// $FlowExpectedError
instance.replace("foo");
