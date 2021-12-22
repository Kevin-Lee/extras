"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[654],{3905:function(e,t,n){n.d(t,{Zo:function(){return f},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},f=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,h=u["".concat(c,".").concat(d)]||u[d]||p[d]||o;return n?r.createElement(h,s(s({ref:t},f),{},{components:n})):r.createElement(h,s({ref:t},f))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},487:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return f},default:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],i={sidebar_position:2,id:"test-with-io",title:"Test with cats-effect 3 IO"},c="Test with cats-effect `IO`",l={unversionedId:"extras-hedgehog-cats-effect3/test-with-io",id:"extras-hedgehog-cats-effect3/test-with-io",isDocsHomePage:!1,title:"Test with cats-effect 3 IO",description:"If you just run IO.unsafeRunSync() in a test, it may not end and just hang. extras for hedgehog and cats-effect 3 (extras-hedgehog-cats-effect3) can solve it.",source:"@site/../generated-docs/target/mdoc/extras-hedgehog-cats-effect3/test-with-io.md",sourceDirName:"extras-hedgehog-cats-effect3",slug:"/extras-hedgehog-cats-effect3/test-with-io",permalink:"/docs/extras-hedgehog-cats-effect3/test-with-io",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,id:"test-with-io",title:"Test with cats-effect 3 IO"},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/extras-hedgehog-cats-effect3/getting-started"},next:{title:"Getting Started",permalink:"/docs/extras-scala-io/getting-started"}},f=[{value:"completeThen",id:"completethen",children:[],level:2},{value:"errorThen",id:"errorthen",children:[],level:2}],p={toc:f};function u(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"test-with-cats-effect-io"},"Test with cats-effect ",(0,o.kt)("inlineCode",{parentName:"h1"},"IO")),(0,o.kt)("p",null,"If you just run ",(0,o.kt)("inlineCode",{parentName:"p"},"IO.unsafeRunSync()")," in a test, it may not end and just hang. extras for hedgehog and cats-effect 3 (",(0,o.kt)("inlineCode",{parentName:"p"},"extras-hedgehog-cats-effect3"),") can solve it. "),(0,o.kt)("h2",{id:"completethen"},"completeThen"),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"CatsEffectRunner")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"completeThen")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"unsafeRunSync()"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import cats.effect._\n\nimport extras.hedgehog.cats.effect.CatsEffectRunner\n\nimport hedgehog._\nimport hedgehog.runner._\n\nobject SomeSpec extends Properties {\n  \n  override def tests: List[Test] = List(\n    property("test with CatsEffectRunner and completeThen", testCatsEffectRunnerWithCompleteThen)\n  )\n  \n  def testCatsEffectRunnerWithCompleteThen: Property = for {\n    n <- Gen.int(Range.linear(Int.MinValue, Int.MaxValue)).log("n")\n  } yield {\n    import CatsEffectRunner._\n    implicit val ticker: Ticker = Ticker.withNewTestContext()\n\n    val expected = n\n    val actual = IO(n)\n\n    actual.completeThen { actual =>\n      actual ==== expected\n    }\n  }\n}\n')),(0,o.kt)("h2",{id:"errorthen"},"errorThen"),(0,o.kt)("p",null,"If you want to test with ",(0,o.kt)("inlineCode",{parentName:"p"},"IO")," which may result in some ",(0,o.kt)("inlineCode",{parentName:"p"},"Exception")," thrown, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"errorThen")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"unsafeRunSync()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Try"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import cats.effect._\n\nimport extras.hedgehog.cats.effect.CatsEffectRunner\n\nimport hedgehog._\nimport hedgehog.runner._\n\nobject SomeSpec extends Properties {\n\n  override def tests: List[Test] = List(\n    property("test with CatsEffectRunner and errorThen", testCatsEffectRunnerWithErrorThen)\n  )\n\n  def testCatsEffectRunnerWithErrorThen: Property = for {\n    message <- Gen.string(Gen.alphaNum, Range.linear(1, 10)).log("message")\n    error <- Gen\n      .element1(\n        TestError.someTestError(s"Don\'t worry it\'s only a test error. $message"),\n        TestError.anotherTestError(s"Don\'t worry it\'s only a test error. $message")\n      )\n      .log("error")\n  } yield {\n    import CatsEffectRunner._\n    implicit val ticker: Ticker = Ticker.withNewTestContext()\n\n    val expected = error\n    val actual = IO.raiseError[Int](error)\n\n    actual.errorThen { actual =>\n      actual ==== expected\n    }\n  }\n\n  sealed abstract class TestError(val message: String) extends RuntimeException(message)\n\n  object TestError {\n    final case class SomeTestError(override val message: String) extends TestError(message)\n    final case class AnotherTestError(override val message: String) extends TestError(message)\n\n    def anotherTestError(message: String): TestError = AnotherTestError(message)\n    def someTestError(message: String): TestError = SomeTestError(message)\n\n  }\n}\n')))}u.isMDXComponent=!0}}]);