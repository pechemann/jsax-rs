:arrow_forward: [JSAX-RS Documentation](./jsax-rs-reference.md)

**[WIP]**

# JSAX-RS Documentation

JSAX-RS, JavaScript API for RESTful Web Services, is a programming language API that provides support in creating web services according to the REST architectural pattern.

## State Of The Art

The JSAX-RS technology and the following reference are based upon the works by Roy Fielding _[FIELDING, 2000]_, Frank MASSÉ _[MASSÉ, 2011]_ and Pacal ECHEMANN _[ECHEMANN, 2016]_.

## Summary

1. [Get Started](./jsax-rs-get-started.md)
2. HTTP API
3. REST API
   - HATOEAS API
      1. [JSAX-RS Design](./jsax-rs-hatoeas-api-design.md)
      1. [HateoasContext Interface](./jsax-rs-hateoascontext-interface.md)
      1. [Application Interface](./jsax-rs-application-interface.md)
      1. [State Interface](./jsax-rs-state-interface.md)
      1. [Transition Interface](./jsax-rs-transition-interface.md)
      1. [Error Codes](./jsax-rs-hatoeas-error-codes.md)
   - Galaad Framework
      1. [Overview](./jsax-rs-galaad-overview.md)
      1. [@RsApplication Decorator](./jsax-rs-galaad-rsapplication.md)
      1. [@RsHateoasContext Decorator](./jsax-rs-galaad-rshateoascontext.md)
      1. [@RsState Decorator](./jsax-rs-galaad-rsstate.md)
      1. [@RsTransition Decorator](./jsax-rs-galaad-rstransition.md)
      1. [@RsTransitionFromState Decorator](./jsax-rs-galaad-rstransitionfromstate.md)
      1. [@RsMapTransition Decorator](./jsax-rs-galaad-rsmaptransition.md)
      1. [Application State Representation](./jsax-rs-galaad-application-state-representation.md)

## Sample Application

The [Galaad sample application](https://github.com/pechemann/galaad-sample) demonstrates how to integrate the JSAX-RS HATOEAS API into an [Express](https://expressjs.com/) web app.

## References

- **[FIELDING, 2000]**: FIELDING, Roy Thomas. Architectural Styles and the Design of Network-based Software ArchitecturesDoctoral dissertation, University of California, Irvine, 2000.
- **[MASSÉ, 2011]**:  MASSÉ Mark. REST API Design Rulebook. O’Reilly Media, Inc, October 2011. p. 116.
- **[ECHEMANN, 2016]**: ECHEMANN Pascal. Resource Access Architecture (RAA) - Technical Report. Previously unreleased. p. 57.

The _RAA Technical Report [ECHEMANN, 2016]_ includes the following references:

- BARRY Douglas and STANIENDA Torsten. Solving the Java Object Storage Problem.  IEEE Computer, vol.31, no. 11, pp. 33-40, November 1998. 
- ALLAIRE Jeremy. Macromedia Flash MX—A next-generation rich client. Macromedia, Inc,  March 2002. 14 p. 
- MESBAH Ali and VAN DEURSEN Arie. Migrating Multi-page Web Applications to Single-page AJAX Interfaces. IEEE Computer Society, CSMR '07 Proceedings of the 11th European Conference on Software Maintenance and Reengineering, pp. 181-190, 2007. 
- WIEDERHOLD Gio. Mediators in the Architecture of Future Information Systems.  Computer, vol.25, no. 3, pp. 38-49, March 1992. 
- FOWLER Martin. Richardson Maturity Model. 18 mars 2010. Retrieved May 21, 2016, from http://martinfowler.com/articles/richardsonMaturityModel.html 
- RICHARDSON Leonard, RUBY Sam. RESTful Web Services. O’Reilly Media, Inc, May 2007. 419 p.
- FIELDING, Roy Thomas. Architectural Styles and the Design of Network-based Software ArchitecturesDoctoral dissertation, University of California, Irvine, 2000.
- CHIN Roger and CHANSON Samuel. Distributed Object-Based Programming Systems.  ACM Computing Surveys, Vol. 23, No. 1, March 1991. 
- QUINT Vincent et al.. The User Interface Domain. Retrieved May 21, 2016, from https://www.w3.org/UI/ 
- FIELDING Roy. It is okay to use POST. Retrieved Jully 16, 2016, from http://roy.gbiv.com/untangled/2009/it-is-okay-to-use-post 
- BACHMANN Felix, BASS Len, CLEMENTS Paul, GARLAN David, IVERS James, LITTLE Reed, NORD Robert and STAFFORD Judith. Documenting Software Architecture: Documenting Interfaces. Technical note CMU/SEI-2002-TN-015, Software Engineering Institute, June 2002.
- FIELDING Roy, GETTYS Jim, MOGUL Jeffey, FRYSTYK Henrik, MASINTER Larry, LEACH Paul and BERNERS-LEE Tim. Hypertext Transfer Protocol — HTTP/1.1. June 1999. Retrieved May 21, 2016, from https://www.w3.org/Protocols/rfc2616/rfc2616.html 
- BERNERS-LEE Tim, FIELDING Roy and MASINTER Larry. Uniform Resource Identifier (URI): Generic Syntax. January 2005. Retrieved July 14, 2016, from https://tools.ietf.org/html/rfc3986 
- FENG Xinyang, SHEN Jianjing and FAN Ying. REST：An Alternative to RPC for Web ServicesArchitecture. Proc.1st Int. Conf. Future Inf. Netw., pp. 14-17, 2009 
- STEWART Zac. The HTTP OPTIONS method and potential for self-describing RESTful APIs. 2012, April 14. Retrieved May 21, 2016, from http://zacstewart.com/2012/04/14/http-options-method.html 
- BELCHE Mike, PEON Roberto and THOMPSON Martin. Hypertext Transfer Protocol Version 2 (HTTP/2). May 2015. Retrieved June 27, 2016, from https://tools.ietf.org/html/rfc7540 
- FLANAGAN David. Java™ in a Nutshell: A Deskop Quick Reference. O’Reilly Media, Inc, November 1999. 418 p.
- SEBESTA Robert. Concepts of Programming Languages, 11th Edition.  Pearson, February 2015. 792 p. 
- MEYER Bertrand. Object-Oriented Software Construction, second edition. Prentice Hall, April 1997. 1296  p.
- VINOSKI Steve. Distributed Object Computing With CORBA.  C++ Report magazine, vol. 5, July/August 1993. 
- PAPAZOGLOU Michael and VAN DEN HEUVEL Willem-Jan. Service-Oriented Computing: State-of-the-Art and Open Research Issues.  IEEE Computer. v40 i11, 2003. 
- VALIPOUR Mohammad Hadi, Amirzafari Bavar, Maleki Khashayar Niki and Daneshpour Negin. A brief survey of software architecture concepts and service oriented architecture. Computer Science and Information Technology, August 2009. ICCSIT 2009. 2nd IEEE International Conference. 
- ERL Thomas. SOA Design Patterns. Prentice Hall, December 2008. 865 p.
- LASKEY Kathryn B. and LASKEY Kenneth. Service oriented architecture.  John Wiley & Sons, Inc. WIREs Comp Stat, 2009. 
- BIRDEAU Lucas, YEH Clifford, PEACHEY Michael and HAKMAN Kevin. Delivery of data and formatting information to allow client-side manipulation. Patent US8136109. October 22, 2002.
- BOOTH David, HAAS Hugo, MCCABE Francis, NEWCOMER Eric, CHAMPION Michael, FERRIS Chris and ORCHARD David. Web Services Architecture. 2004. Retrieved Jully 5, 2016, from https://www.w3.org/TR/ws-arch. 
- ZDUN Uwe, HENTRICH Carsten and VAN DER AALST Wil M.P.. A Survey of Patterns for Service-Oriented Architectures.  International Journal of Internet Protocol Technology (IJIPT), Vol. 1, No. 3, May 2006.  
- WEBBER Jim, PARASTATIDIS Savas and ROBINSON Ian. REST in Practice Hypermedia and Systems Architecture. O’Reilly Media, Inc, September 2010. p. 448.
- MASSÉ Mark. REST API Design Rulebook. O’Reilly Media, Inc, October 2011. p. 116.
- SNYDER Alan. Encapsulation and Inheritance in Object-Orlented Programming Languages.  ACM SIGPLAN Notices, Volume 21 Issue 11, November 1986.  pp. 38-45. 
- LIEBERMAN Henry. Using prototypical objects to implement shared behavior in object-oriented systems.  Proceedings of the 1986 conference on Object-oriented programming systems, languages, and applications Homepage. Volume 21 Issue 11, Nov. 1986, pp. 214-223  
- MEYER Bertrand. Genericity versus Inheritance.  MEYER Bertrand. Genericity versus Inheritance. ACM SIGPLAN Notices Proceedings OOPSLA '86, vol. 21, no. 11, pp. 391-405, Nov 1986. 
- CANNING Peter, COOK William, HILL Walter and OLTHOFF Walter. Interfaces for Strongly-Typed Object-Oriented Programming.  Proc. of ACM Conf. on Object-Oriented Programming, Systems, Languages and Applications, pp 457-467, 1989.  
- NIERSTRASZ Oscar. A Survey of Object-Oriented Concepts.  Object-Oriented Concepts,Databases and Applications, ed. W. Kim and F. Lochovsky, pp. 3-21, ACMPress and Addison-Wesley, 1989. 
- MRISSA Michaël. Médiation Sémantique Orientée Contexte pour la Composition de Services WebDoctoral dissertation, University of Claude Bernard Lyon I, November 15, 2007.
- COULOURIS George, DOLLIMORE Jean, KINDBERG Tim and BLAIR Gordon. Distributed Systems: Concepts and Design (5th Edition). Pearson, May 7, 2001. 1008 p.
- BURBECK Steve. Applications Programming in Smalltalk-80 (TM): How to use Model-View-Controller (MVC). 1992.  Retrieved Jully 25, 2016, from https://www.researchgate.net/publication/238719652_Applications_programming_in_Smalltalk-80_how_to_use_model-view-controller_MVC 
- MURALI Therthala, PAWLAK Renaud, and YOUNESSI Houman. Applying aspect orientation to J2EE business tier patterns.  2004. In Proc. of the 3rd AOSD Workshop on Aspects, Components, and Patterns for Infrastructure Software (ACP4IS), Y. Coady and D. Lorenz, Eds. University of Victoria, Victoria, Canada. 
- SCHILDT  Herbert. Java: The Complete Reference, 9th Edition. McGraw-Hill Education, April 8, 2014. 1312 p.
- DARCY Joe. JSR 269: Pluggable Annotation Processing API. Public review version. May 17, 2006. Retrieved August 27, 2016, from http://jcp.org/en/jsr/detail?id=269 
- GAMMA Erich, HELM Richard, JOHNSON Ralph and VLISSIDES John. Design Patterns: Elements of Reusable Object-Oriented Software 1st Edition. Addison-Wesley Professional; November 10, 1994. 395 p.
- CIVELLO Franco. Roles for composite objects in object-oriented analysis and design.  1993. OOPSLA '93 Proceedings of the eighth annual conference on Object-oriented programming systems, languages, and applications,pp. 376-393. 
- BÜTTNER Fabian, RADFELDER Oliver, LINDOW Arne and GOGOLLA Martin. Digging into the Visitor Pattern.  Proc. IEEE 16th Int. Conf. Software Engineering and Knowlege Engineering (SEKE’2004). IEEE, Los Alamitos, 2004. 
- JEANMART Sébastien, GUEHENEUC Yann-Gaël, SAHRAOUI Houari and HABRA Naji. Impact of the Visitor Pattern on Program Comprehension and Maintenance.  ESEM '09 Proceedings of the 2009 3rd International Symposium on Empirical Software Engineering and Measurement, 2009. pp. 69-78. 
- GUEHENEUC Yann-Gaël, ALBIN-AMIOT Hervé, DOUENCE Rémi and COINTE Pierre. Bridging the Gap between Modeling and Programming Languages. Technical report 02/09/INFO, Computer Science Department, École des Mines de Nantes, July 2002. 
- SO/IEC 25010:2011. Systems and software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE)— System and software quality models.  
