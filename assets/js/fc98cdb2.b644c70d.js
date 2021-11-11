"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[337],{7518:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return u},default:function(){return l}});var r=n(7462),i=n(3366),s=(n(7294),n(3905)),a=["components"],o={sidebar_position:2,id:"either",title:"Either"},c=void 0,d={unversionedId:"extras-cats/either",id:"extras-cats/either",isDocsHomePage:!1,title:"Either",description:"Extension Methods for EitherT",source:"@site/../generated-docs/target/mdoc/extras-cats/either.md",sourceDirName:"extras-cats",slug:"/extras-cats/either",permalink:"/docs/extras-cats/either",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,id:"either",title:"Either"},sidebar:"tutorialSidebar",previous:{title:"Get extras-cats",permalink:"/docs/extras-cats/get"},next:{title:"Option",permalink:"/docs/extras-cats/option"}},u=[{value:"Extension Methods for EitherT",id:"extension-methods-for-eithert",children:[]}],h={toc:u};function l(t){var e=t.components,n=(0,i.Z)(t,a);return(0,s.kt)("wrapper",(0,r.Z)({},h,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"extension-methods-for-eithert"},"Extension Methods for EitherT"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala"},'import cats._\nimport cats.syntax.all._\nimport cats.effect._\n\nimport extras.cats.syntax.all._\n\n\nfinal case class MyError(message: String)\n\ndef divide[F[_]: Sync](a: Int, b: Int): F[Either[MyError, Int]] =\n  if (b == 0)\n    MyError(s"You can divide number by 0. [a: $a, b: $b]").asLeft.pure[F]\n  else\n    Sync[F].delay((a / b).asRight)\n\n\ndef foo[F[_]: Sync](n: Int): F[Int] = Sync[F].pure(n * 2)\n\n\ndef run[F[_]: Sync](): F[Either[MyError, Int]] = (for {\n  a <- foo(123).rightT\n  b <- 2.rightTF[F, MyError]\n  c <- divide(a, b).eitherT\n} yield c).value\n\nprintln(run[IO]().unsafeRunSync())\n\n// Right(123)\n')))}l.isMDXComponent=!0}}]);