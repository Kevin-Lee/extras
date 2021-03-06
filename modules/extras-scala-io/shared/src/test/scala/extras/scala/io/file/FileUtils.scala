package extras.scala.io.file

import java.io.File
import scala.annotation.tailrec
import scala.util.Try

/** @author Kevin Lee
  * @since 2022-03-24
  */
object FileUtils {

  def cleanUpFilesInside(file: File): Unit = {
    @tailrec
    def cleanAll(files: Seq[File]): Unit = files match {
      case file +: rest =>
        if (file.isDirectory) {
          val list = file.listFiles
          if (list.isEmpty) {
            Try(file.delete()).foreach(_ => ())
            cleanAll(rest)
          } else {
            cleanAll((list.toVector ++ rest) :+ file)
          }
        } else {
          if (file.exists()) {
            Try(file.delete()).foreach(_ => ())
            cleanAll(rest)
          } else cleanAll(rest)
        }
      case Seq() =>
        ()
    }
    if (file.exists) {
      if (file.isDirectory) {
        cleanAll(file.listFiles.toVector)
      } else {
        ()
      }
    } else {
      ()
    }
  }
}
